// 365法文日記 - 核心遊戲邏輯

// 語音管理器
class VoiceManager {
    constructor() {
        this.synth = window.speechSynthesis;
        this.voices = [];
        this.frenchVoice = null;
        this.autoPlay = true;
        this.rate = 0.9; // 語速
        this.pitch = 1; // 音調
        
        this.initVoices();
    }
    
    initVoices() {
        // 載入可用的語音
        const loadVoices = () => {
            this.voices = this.synth.getVoices();
            // 尋找法文語音
            this.frenchVoice = this.voices.find(voice => 
                voice.lang.startsWith('fr') || voice.lang === 'fr-FR'
            ) || this.voices.find(voice => 
                voice.lang.includes('fr')
            ) || this.voices[0]; // 如果找不到法文語音，使用第一個
            
            console.log('可用語音:', this.voices.length);
            console.log('選擇的法文語音:', this.frenchVoice?.name);
        };
        
        loadVoices();
        
        // 某些瀏覽器需要等待語音載入
        if (this.synth.onvoiceschanged !== undefined) {
            this.synth.onvoiceschanged = loadVoices;
        }
    }
    
    speak(text, options = {}) {
        // 停止當前播放
        this.synth.cancel();
        
        if (!text) return;
        
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.voice = this.frenchVoice;
        utterance.lang = 'fr-FR';
        utterance.rate = options.rate || this.rate;
        utterance.pitch = options.pitch || this.pitch;
        utterance.volume = options.volume || 1;
        
        // 事件監聽
        utterance.onstart = () => {
            console.log('開始朗讀:', text);
        };
        
        utterance.onerror = (event) => {
            console.error('語音錯誤:', event);
        };
        
        this.synth.speak(utterance);
    }
    
    stop() {
        this.synth.cancel();
    }
    
    toggleAutoPlay() {
        this.autoPlay = !this.autoPlay;
        return this.autoPlay;
    }
    
    setRate(rate) {
        this.rate = Math.max(0.5, Math.min(2, rate));
    }
}

class FrenchDiaryGame {
    constructor() {
        this.currentDay = 1;
        this.completedDays = [];
        this.totalStars = 0;
        this.currentQuestionIndex = 0;
        this.currentDayData = null;
        this.questionsAnswered = 0;
        this.correctAnswers = 0;
        this.learnedWords = [];
        this.voiceManager = new VoiceManager();
        
        this.loadProgress();
        this.initializeUI();
        this.bindEvents();
    }

    // 載入遊戲進度
    loadProgress() {
        const saved = localStorage.getItem('frenchDiary365');
        if (saved) {
            const data = JSON.parse(saved);
            this.currentDay = data.currentDay || 1;
            this.completedDays = data.completedDays || [];
            this.totalStars = data.totalStars || 0;
            this.learnedWords = data.learnedWords || [];
            
            // 載入當天進度
            if (data.currentDayProgress) {
                this.currentQuestionIndex = data.currentDayProgress.questionIndex || 0;
                this.questionsAnswered = data.currentDayProgress.questionsAnswered || 0;
                this.correctAnswers = data.currentDayProgress.correctAnswers || 0;
            }
        }
    }

    // 儲存遊戲進度
    saveProgress() {
        const data = {
            currentDay: this.currentDay,
            completedDays: this.completedDays,
            totalStars: this.totalStars,
            learnedWords: this.learnedWords,
            lastPlayed: new Date().toISOString(),
            // 保存當天答題進度
            currentDayProgress: {
                questionIndex: this.currentQuestionIndex,
                questionsAnswered: this.questionsAnswered,
                correctAnswers: this.correctAnswers
            }
        };
        localStorage.setItem('frenchDiary365', JSON.stringify(data));
        console.log('✅ 進度已自動保存');
    }

    // 初始化UI
    initializeUI() {
        this.updateStats();
        this.renderDiaryList();
        
        // 如果有進度，顯示繼續按鈕
        if (this.completedDays.length > 0) {
            document.getElementById('continueBtn').style.display = 'block';
        }
    }

    // 綁定事件
    bindEvents() {
        document.getElementById('startBtn').addEventListener('click', () => {
            this.startNewGame();
        });

        document.getElementById('continueBtn').addEventListener('click', () => {
            this.startDay(this.currentDay);
        });

        document.getElementById('nextQuestionBtn').addEventListener('click', () => {
            this.nextQuestion();
        });

        document.getElementById('submitAnswerBtn').addEventListener('click', () => {
            this.checkAnswer();
        });

        document.getElementById('answerInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.checkAnswer();
            }
        });

        document.getElementById('nextDayBtn').addEventListener('click', () => {
            this.goToNextDay();
        });

        document.getElementById('viewDiaryBtn').addEventListener('click', () => {
            this.showDiaryList();
        });

        document.getElementById('closeModal').addEventListener('click', () => {
            this.closeModal();
        });
        
        // 手動存檔按鈕
        document.getElementById('manualSaveBtn').addEventListener('click', () => {
            this.saveProgress();
            this.showSaveNotification();
        });
        
        // 語音控制按鈕
        document.getElementById('autoPlayToggle')?.addEventListener('click', () => {
            this.toggleAutoPlay();
        });
        
        document.getElementById('speedControl')?.addEventListener('change', (e) => {
            this.voiceManager.setRate(parseFloat(e.target.value));
        });
        
        // 法文虛擬鍵盤
        this.initFrenchKeyboard();

        // 篩選按鈕
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                this.filterDiaryList(e.target.dataset.filter);
            });
        });
    }

    // 開始新遊戲
    startNewGame() {
        this.currentDay = 1;
        this.completedDays = [];
        this.totalStars = 0;
        this.learnedWords = [];
        this.saveProgress();
        this.startDay(1);
    }

    // 開始指定天數
    startDay(day) {
        this.currentDay = day;
        this.currentDayData = this.getDayData(day);
        
        // 檢查是否有未完成的進度
        const saved = localStorage.getItem('frenchDiary365');
        let hasSavedProgress = false;
        if (saved) {
            const data = JSON.parse(saved);
            if (data.currentDay === day && data.currentDayProgress && 
                data.currentDayProgress.questionsAnswered > 0 &&
                data.currentDayProgress.questionsAnswered < this.currentDayData.questions.length) {
                // 恢復進度
                this.currentQuestionIndex = data.currentDayProgress.questionIndex;
                this.questionsAnswered = data.currentDayProgress.questionsAnswered;
                this.correctAnswers = data.currentDayProgress.correctAnswers;
                hasSavedProgress = true;
                console.log('📂 已恢復上次進度');
            } else {
                // 新的一天，重置進度
                this.currentQuestionIndex = 0;
                this.questionsAnswered = 0;
                this.correctAnswers = 0;
            }
        } else {
            this.currentQuestionIndex = 0;
            this.questionsAnswered = 0;
            this.correctAnswers = 0;
        }

        // 切換到遊戲畫面
        document.getElementById('welcomeScreen').style.display = 'none';
        document.getElementById('gameScreen').style.display = 'block';
        document.getElementById('levelComplete').style.display = 'none';

        this.updateLevelHeader();
        
        // 如果有保存進度，直接跳到題目
        if (hasSavedProgress) {
            this.showQuestion();
        } else {
            this.showStory();
        }
        
        this.updateStats();
    }

    // 取得當天數據
    getDayData(day) {
        // 從data.js取得數據
        return window.getDayContent(day);
    }

    // 更新關卡標題
    updateLevelHeader() {
        const data = this.currentDayData;
        document.getElementById('levelBadge').textContent = `第${this.currentDay}天`;
        document.getElementById('levelTitle').textContent = data.title;
        
        const difficulty = this.getDifficulty(this.currentDay);
        document.getElementById('levelDifficulty').textContent = difficulty;
        
        this.updateProgress();
    }

    // 取得難度
    getDifficulty(day) {
        if (day <= 100) return '🌱 初級';
        if (day <= 200) return '🌿 中級';
        return '🌳 高級';
    }

    // 更新進度條
    updateProgress() {
        const total = this.currentDayData.questions.length;
        const completed = this.questionsAnswered;
        const percentage = (completed / total) * 100;
        
        document.getElementById('progressFill').style.width = `${percentage}%`;
        document.getElementById('progressText').textContent = `${completed}/${total} 完成`;
    }

    // 顯示故事
    showStory() {
        const storyPanel = document.getElementById('storyPanel');
        const storyContent = document.getElementById('storyContent');
        const questionPanel = document.getElementById('questionPanel');
        
        storyContent.innerHTML = `
            <div class="story-text">
                <p>${this.currentDayData.story}</p>
            </div>
            <button class="btn-primary btn-start-quest">開始挑戰！</button>
        `;
        
        storyPanel.style.display = 'block';
        questionPanel.style.display = 'none';
        
        document.querySelector('.btn-start-quest').addEventListener('click', () => {
            this.showQuestion();
        });
    }

    // 顯示問題
    showQuestion() {
        document.getElementById('storyPanel').style.display = 'none';
        document.getElementById('questionPanel').style.display = 'block';
        document.getElementById('feedbackPanel').style.display = 'none';
        
        const question = this.currentDayData.questions[this.currentQuestionIndex];
        
        document.getElementById('questionTitle').textContent = `問題 ${this.currentQuestionIndex + 1}`;
        document.getElementById('questionContent').innerHTML = question.question;
        
        // 如果問題包含法文，自動播放
        if (question.frenchText && this.voiceManager.autoPlay) {
            setTimeout(() => {
                this.voiceManager.speak(question.frenchText);
            }, 500);
        }
        
        // 根據問題類型顯示不同的輸入方式
        if (question.type === 'multiple') {
            this.showMultipleChoice(question);
        } else if (question.type === 'sorting') {
            this.showSortingQuestion(question);
        } else if (question.type === 'input' || question.type === 'writing') {
            this.showInputAnswer(question);
        }
    }

    // 顯示選擇題
    showMultipleChoice(question) {
        document.getElementById('answerInputContainer').style.display = 'none';
        document.getElementById('sortingArea').style.display = 'none';
        const optionsContainer = document.getElementById('answerOptions');
        optionsContainer.style.display = 'grid';
        optionsContainer.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            
            // 檢查選項是否為法文（包含法文字母）
            const isFrench = /[àâäéèêëïîôùûüÿæœç]/i.test(option) || 
                           question.type === 'multiple' && index === 0;
            
            if (isFrench) {
                btn.innerHTML = `
                    <span class="option-text">${option}</span>
                    <button class="voice-btn" onclick="event.stopPropagation(); window.game.voiceManager.speak('${option.replace(/'/g, "\\'")}')">🔊</button>
                `;
            } else {
                btn.textContent = option;
            }
            
            btn.dataset.answer = option;
            btn.addEventListener('click', (e) => {
                if (!e.target.classList.contains('voice-btn')) {
                    this.selectOption(e.target.closest('.option-btn'));
                }
            });
            optionsContainer.appendChild(btn);
        });
    }

    // 顯示排序題
    showSortingQuestion(question) {
        document.getElementById('answerOptions').style.display = 'none';
        document.getElementById('answerInputContainer').style.display = 'none';
        document.getElementById('sortingArea').style.display = 'block';
        
        const wordBank = document.getElementById('wordBank');
        const sentenceBuilder = document.getElementById('sentenceBuilder');
        
        wordBank.innerHTML = '';
        sentenceBuilder.innerHTML = '<div class="placeholder">拖曳單字到這裡</div>';
        
        // 打亂單字順序
        const shuffledWords = [...question.words].sort(() => Math.random() - 0.5);
        
        // 創建可拖曳的單字卡片
        shuffledWords.forEach((word, index) => {
            const wordCard = document.createElement('div');
            wordCard.className = 'word-card';
            wordCard.textContent = word;
            wordCard.draggable = true;
            wordCard.dataset.word = word;
            wordCard.dataset.index = index;
            
            wordCard.addEventListener('dragstart', (e) => {
                e.dataTransfer.setData('text/plain', word);
                wordCard.classList.add('dragging');
            });
            
            wordCard.addEventListener('dragend', () => {
                wordCard.classList.remove('dragging');
            });
            
            // 點擊也可以添加單字
            wordCard.addEventListener('click', () => {
                this.addWordToSentence(word, wordCard);
            });
            
            wordBank.appendChild(wordCard);
        });
        
        // 設置拖放區域
        sentenceBuilder.addEventListener('dragover', (e) => {
            e.preventDefault();
            sentenceBuilder.classList.add('drag-over');
        });
        
        sentenceBuilder.addEventListener('dragleave', () => {
            sentenceBuilder.classList.remove('drag-over');
        });
        
        sentenceBuilder.addEventListener('drop', (e) => {
            e.preventDefault();
            sentenceBuilder.classList.remove('drag-over');
            const word = e.dataTransfer.getData('text/plain');
            const draggedCard = document.querySelector('.word-card.dragging');
            if (draggedCard) {
                this.addWordToSentence(word, draggedCard);
            }
        });
        
        // 綁定提交按鈕
        const submitBtn = document.getElementById('submitSortingBtn');
        submitBtn.onclick = () => this.checkSortingAnswer();
    }
    
    addWordToSentence(word, wordCard) {
        const sentenceBuilder = document.getElementById('sentenceBuilder');
        const placeholder = sentenceBuilder.querySelector('.placeholder');
        
        if (placeholder) {
            placeholder.remove();
        }
        
        // 創建句子中的單字卡片
        const sentenceWord = document.createElement('span');
        sentenceWord.className = 'sentence-word';
        sentenceWord.textContent = word;
        sentenceWord.dataset.word = word;
        
        // 點擊可以移除
        sentenceWord.addEventListener('click', () => {
            sentenceWord.remove();
            wordCard.style.display = 'block';
            if (sentenceBuilder.querySelectorAll('.sentence-word').length === 0) {
                sentenceBuilder.innerHTML = '<div class="placeholder">拖曳單字到這裡</div>';
            }
        });
        
        sentenceBuilder.appendChild(sentenceWord);
        wordCard.style.display = 'none';
    }
    
    checkSortingAnswer() {
        const question = this.currentDayData.questions[this.currentQuestionIndex];
        const sentenceBuilder = document.getElementById('sentenceBuilder');
        const words = Array.from(sentenceBuilder.querySelectorAll('.sentence-word'))
            .map(span => span.textContent);
        
        const userAnswer = words.join(' ');
        const isCorrect = userAnswer === question.answer;
        
        this.showFeedback(isCorrect, question);
    }

    // 顯示填空題
    showInputAnswer(question) {
        document.getElementById('answerOptions').style.display = 'none';
        document.getElementById('sortingArea').style.display = 'none';
        document.getElementById('answerInputContainer').style.display = 'flex';
        const inputField = document.getElementById('answerInput');
        inputField.value = '';
        
        // 判斷是否為寫作題
        const isWritingQuestion = question.type === 'writing';
        const keyboard = document.getElementById('frenchKeyboard');
        
        if (isWritingQuestion) {
            // 寫作題：使用 textarea 並顯示虛擬鍵盤
            inputField.style.minHeight = '150px';
            inputField.placeholder = '請在此輸入你的法文作文...';
            keyboard.style.display = 'block';
        } else {
            // 一般填空題：使用單行 input
            inputField.style.minHeight = '50px';
            inputField.placeholder = '輸入你的答案...';
            keyboard.style.display = 'block'; // 所有輸入題都顯示鍵盤
        }
        
        inputField.focus();
        
        if (question.hint) {
            document.getElementById('questionContent').innerHTML += 
                `<p class="hint">💡 提示: ${question.hint}</p>`;
        }
    }
    
    // 初始化法文虛擬鍵盤
    initFrenchKeyboard() {
        const keyboard = document.getElementById('frenchKeyboard');
        const inputField = document.getElementById('answerInput');
        
        if (!keyboard || !inputField) return;
        
        // 為每個按鍵添加點擊事件
        keyboard.querySelectorAll('.key-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const char = btn.dataset.char;
                const cursorPos = inputField.selectionStart;
                const currentValue = inputField.value;
                
                // 在游標位置插入字元
                const newValue = currentValue.substring(0, cursorPos) + 
                                char + 
                                currentValue.substring(inputField.selectionEnd);
                
                inputField.value = newValue;
                
                // 將游標移到插入字元之後
                inputField.selectionStart = inputField.selectionEnd = cursorPos + char.length;
                inputField.focus();
                
                // 視覺反饋
                btn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    btn.style.transform = '';
                }, 100);
            });
        });
    }

    // 選擇選項
    selectOption(button) {
        // 移除其他選項的選中狀態
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        button.classList.add('selected');
        
        // 立即檢查答案
        setTimeout(() => {
            this.checkSelectedAnswer(button.dataset.answer);
        }, 300);
    }

    // 檢查選中的答案
    checkSelectedAnswer(answer) {
        const question = this.currentDayData.questions[this.currentQuestionIndex];
        const isCorrect = answer.toLowerCase().trim() === question.answer.toLowerCase().trim();
        
        this.showFeedback(isCorrect, question);
    }

    // 檢查輸入答案
    checkAnswer() {
        const input = document.getElementById('answerInput').value.trim();
        if (!input) return;
        
        const question = this.currentDayData.questions[this.currentQuestionIndex];
        
        // 寫作題型的檢查
        if (question.type === 'writing') {
            this.checkWritingAnswer(input, question);
            return;
        }
        
        const isCorrect = input.toLowerCase() === question.answer.toLowerCase();
        
        this.showFeedback(isCorrect, question);
    }
    
    // 檢查寫作答案
    checkWritingAnswer(input, question) {
        const wordCount = input.split(/\s+/).filter(w => w.length > 0).length;
        const minWords = question.minWords || 30;
        
        if (wordCount < minWords) {
            alert(`請至少寫 ${minWords} 個字！目前只有 ${wordCount} 個字。`);
            return;
        }
        
        // 檢查是否包含關鍵詞
        let keywordsFound = 0;
        const keywords = question.keywords || [];
        keywords.forEach(keyword => {
            if (input.toLowerCase().includes(keyword.toLowerCase())) {
                keywordsFound++;
            }
        });
        
        const keywordScore = keywords.length > 0 ? keywordsFound / keywords.length : 1;
        const isGoodAnswer = keywordScore >= 0.5; // 至少包含50%的關鍵詞
        
        this.showWritingFeedback(input, wordCount, keywordsFound, keywords, question, isGoodAnswer);
    }
    
    // 顯示寫作反饋
    showWritingFeedback(input, wordCount, keywordsFound, keywords, question, isGoodAnswer) {
        document.getElementById('questionPanel').style.display = 'none';
        document.getElementById('feedbackPanel').style.display = 'flex';
        
        const icon = document.getElementById('feedbackIcon');
        const title = document.getElementById('feedbackTitle');
        const message = document.getElementById('feedbackMessage');
        
        icon.textContent = isGoodAnswer ? '✅' : '⭐';
        title.textContent = isGoodAnswer ? '寫得很好！' : '完成了！';
        
        let feedbackHTML = `
            <div class="writing-feedback">
                <p><strong>你的答案：</strong></p>
                <div class="user-writing">${input}</div>
                <p>📝 字數：${wordCount} 字 ${wordCount >= question.minWords ? '✅' : '❌'}</p>
        `;
        
        if (keywords.length > 0) {
            feedbackHTML += `
                <p>🎯 關鍵詞使用：${keywordsFound}/${keywords.length}</p>
                <p class="keywords">建議包含：${keywords.join(', ')}</p>
            `;
        }
        
        if (question.sampleAnswer) {
            feedbackHTML += `
                <p><strong>參考範例：</strong></p>
                <div class="sample-answer">${question.sampleAnswer}
                <button class="voice-btn-inline" onclick="window.game.voiceManager.speak('${question.sampleAnswer.replace(/'/g, "\\'")}')">🔊 聽範例</button>
                </div>
            `;
        }
        
        feedbackHTML += `
                <p>${question.explanation || ''}</p>
            </div>
        `;
        
        message.innerHTML = feedbackHTML;
        
        // 寫作題總是算對（鼓勵學習）
        this.correctAnswers++;
        this.questionsAnswered++;
        this.updateProgress();
        this.updateNotes();
        
        // 每答完一題自動存檔
        this.saveProgress();
    }

    // 顯示反饋
    showFeedback(isCorrect, question) {
        document.getElementById('questionPanel').style.display = 'none';
        document.getElementById('feedbackPanel').style.display = 'flex';
        
        const icon = document.getElementById('feedbackIcon');
        const title = document.getElementById('feedbackTitle');
        const message = document.getElementById('feedbackMessage');
        
        if (isCorrect) {
            icon.textContent = '✅';
            title.textContent = '太棒了！';
            message.innerHTML = `
                <p>${question.explanation || '答對了！'}</p>
                ${question.vocabulary ? `<div class="vocab-learned">
                    <strong>📚 學到了：</strong> ${question.vocabulary}
                    <button class="voice-btn-inline" onclick="window.game.speakVocabulary('${question.vocabulary.split('-')[0].trim().replace(/'/g, "\\'")}')">🔊 聽發音</button>
                </div>` : ''}
            `;
            
            // 自動播放正確答案的發音
            if (question.answer && this.voiceManager.autoPlay) {
                setTimeout(() => {
                    this.voiceManager.speak(question.answer);
                }, 800);
            }
            this.correctAnswers++;
            
            // 記錄學習的單字
            if (question.vocabulary) {
                this.learnedWords.push({
                    word: question.vocabulary,
                    day: this.currentDay,
                    date: new Date().toISOString()
                });
            }
        } else {
            icon.textContent = '❌';
            title.textContent = '再想想看';
            message.innerHTML = `
                <p>正確答案是：<strong>${question.answer}</strong>
                <button class="voice-btn-inline" onclick="window.game.voiceManager.speak('${question.answer.replace(/'/g, "\\'")}')">🔊</button>
                </p>
                <p>${question.explanation || ''}</p>
            `;
            
            // 自動播放正確答案
            if (this.voiceManager.autoPlay) {
                setTimeout(() => {
                    this.voiceManager.speak(question.answer);
                }, 800);
            }
        }
        
        this.questionsAnswered++;
        this.updateProgress();
        this.updateNotes();
        
        // 每答完一題自動存檔
        this.saveProgress();
    }

    // 下一題
    nextQuestion() {
        this.currentQuestionIndex++;
        
        if (this.currentQuestionIndex < this.currentDayData.questions.length) {
            this.showQuestion();
        } else {
            this.completeDay();
        }
    }

    // 完成當天
    completeDay() {
        const stars = this.calculateStars();
        this.totalStars += stars;
        
        // 記錄完成
        if (!this.completedDays.find(d => d.day === this.currentDay)) {
            this.completedDays.push({
                day: this.currentDay,
                stars: stars,
                score: this.correctAnswers,
                total: this.currentDayData.questions.length,
                date: new Date().toISOString(),
                diary: this.generateDiary()
            });
        }
        
        // 清除當天進度（因為已完成）
        this.currentQuestionIndex = 0;
        this.questionsAnswered = 0;
        this.correctAnswers = 0;
        
        this.saveProgress();
        this.showComplete(stars);
    }

    // 計算星星數
    calculateStars() {
        const percentage = (this.correctAnswers / this.currentDayData.questions.length) * 100;
        if (percentage === 100) return 3;
        if (percentage >= 60) return 2;
        return 1;
    }

    // 生成日記
    generateDiary() {
        return {
            title: this.currentDayData.title,
            story: this.currentDayData.story,
            learned: this.learnedWords.filter(w => w.day === this.currentDay),
            reflection: this.currentDayData.diary || `今天學習了${this.currentDayData.title}，完成了${this.correctAnswers}/${this.currentDayData.questions.length}個挑戰！`
        };
    }

    // 顯示完成畫面
    showComplete(stars) {
        document.getElementById('questionPanel').style.display = 'none';
        document.getElementById('feedbackPanel').style.display = 'none';
        document.getElementById('levelComplete').style.display = 'flex';
        
        // 顯示星星
        const starsHtml = '⭐'.repeat(stars);
        document.getElementById('starsEarned').innerHTML = `<div class="stars">${starsHtml}</div>`;
        
        // 顯示摘要
        document.getElementById('levelSummary').innerHTML = `
            <p>答對 <strong>${this.correctAnswers}</strong> / ${this.currentDayData.questions.length} 題</p>
            <p>正確率: <strong>${Math.round((this.correctAnswers / this.currentDayData.questions.length) * 100)}%</strong></p>
        `;
        
        // 顯示日記預覽
        const diary = this.completedDays.find(d => d.day === this.currentDay).diary;
        document.getElementById('diaryPreview').innerHTML = `
            <h4>${diary.title}</h4>
            <p>${diary.reflection}</p>
            ${diary.learned.length > 0 ? `
                <div class="learned-words">
                    <strong>今日學會:</strong>
                    ${diary.learned.map(w => `<span class="word-tag">${w.word}</span>`).join('')}
                </div>
            ` : ''}
        `;
        
        this.updateStats();
        this.renderDiaryList();
    }

    // 前往下一天
    goToNextDay() {
        this.currentDay++;
        if (this.currentDay <= 365) {
            this.startDay(this.currentDay);
        } else {
            alert('🎉 恭喜完成365天的法文學習之旅！');
            this.showDiaryList();
        }
    }

    // 更新統計
    updateStats() {
        document.getElementById('currentDay').textContent = this.currentDay;
        document.getElementById('completedDays').textContent = this.completedDays.length;
        document.getElementById('totalStars').textContent = this.totalStars;
    }

    // 更新筆記
    updateNotes() {
        const question = this.currentDayData.questions[this.currentQuestionIndex];
        const notesContent = document.getElementById('notesContent');
        
        if (question.vocabulary) {
            notesContent.innerHTML = `
                <div class="note-item">
                    <h4>📖 單字</h4>
                    <p>${question.vocabulary}</p>
                </div>
                ${question.explanation ? `
                <div class="note-item">
                    <h4>💡 說明</h4>
                    <p>${question.explanation}</p>
                </div>
                ` : ''}
            `;
        }
    }

    // 渲染日記列表
    renderDiaryList() {
        const listContainer = document.getElementById('diaryList');
        listContainer.innerHTML = '';
        
        for (let i = 1; i <= Math.min(this.currentDay + 2, 365); i++) {
            const completed = this.completedDays.find(d => d.day === i);
            const isLocked = i > this.currentDay;
            const isCurrent = i === this.currentDay;
            
            const item = document.createElement('div');
            item.className = `diary-item ${isLocked ? 'locked' : ''} ${isCurrent ? 'current' : ''}`;
            item.dataset.day = i;
            item.dataset.status = isLocked ? 'locked' : completed ? 'completed' : 'available';
            
            item.innerHTML = `
                <div class="diary-item-header">
                    <span class="diary-day">第${i}天</span>
                    ${completed ? `<span class="diary-stars">${'⭐'.repeat(completed.stars)}</span>` : ''}
                    ${isLocked ? '<span class="diary-lock">🔒</span>' : ''}
                </div>
                <div class="diary-item-title">${this.getDayTitle(i)}</div>
            `;
            
            if (!isLocked) {
                item.addEventListener('click', () => {
                    if (completed) {
                        this.showDiaryDetail(i);
                    } else {
                        this.startDay(i);
                    }
                });
            }
            
            listContainer.appendChild(item);
        }
    }

    // 取得天數標題
    getDayTitle(day) {
        const data = this.getDayData(day);
        return data.title;
    }

    // 篩選日記列表
    filterDiaryList(filter) {
        const items = document.querySelectorAll('.diary-item');
        items.forEach(item => {
            const status = item.dataset.status;
            if (filter === 'all') {
                item.style.display = 'block';
            } else if (filter === 'completed' && status === 'completed') {
                item.style.display = 'block';
            } else if (filter === 'locked' && status === 'locked') {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    }

    // 顯示日記詳情
    showDiaryDetail(day) {
        const completed = this.completedDays.find(d => d.day === day);
        if (!completed) return;
        
        const modal = document.getElementById('diaryModal');
        const title = document.getElementById('modalTitle');
        const body = document.getElementById('modalBody');
        
        title.textContent = `第${day}天 - ${completed.diary.title}`;
        body.innerHTML = `
            <div class="diary-detail">
                <div class="diary-stats">
                    <span>${'⭐'.repeat(completed.stars)}</span>
                    <span>正確率: ${Math.round((completed.score / completed.total) * 100)}%</span>
                    <span>日期: ${new Date(completed.date).toLocaleDateString('zh-TW')}</span>
                </div>
                <div class="diary-story">
                    <h3>📖 今日冒險</h3>
                    <p>${completed.diary.story}</p>
                </div>
                <div class="diary-reflection">
                    <h3>✍️ 學習心得</h3>
                    <p>${completed.diary.reflection}</p>
                </div>
                ${completed.diary.learned.length > 0 ? `
                <div class="diary-vocabulary">
                    <h3>📚 學會的單字</h3>
                    <div class="word-list">
                        ${completed.diary.learned.map(w => `<span class="word-tag">${w.word}</span>`).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        `;
        
        modal.style.display = 'flex';
    }

    // 顯示日記列表頁面
    showDiaryList() {
        document.getElementById('gameScreen').style.display = 'none';
        document.getElementById('welcomeScreen').style.display = 'block';
    }

    // 關閉模態框
    closeModal() {
        document.getElementById('diaryModal').style.display = 'none';
    }
    
    // 播放單字發音
    speakVocabulary(text) {
        // 移除中文部分，只保留法文
        const frenchText = text.split('-')[0].trim();
        this.voiceManager.speak(frenchText);
    }
    
    // 切換自動播放
    toggleAutoPlay() {
        const isEnabled = this.voiceManager.toggleAutoPlay();
        const btn = document.getElementById('autoPlayToggle');
        if (btn) {
            btn.textContent = isEnabled ? '🔊 自動播放：開' : '🔇 自動播放：關';
            btn.classList.toggle('active', isEnabled);
        }
    }
}

// 初始化遊戲
document.addEventListener('DOMContentLoaded', () => {
    window.game = new FrenchDiaryGame();
});
