"""
範例：使用不同遊戲模式學習法文
"""

from game_modes import (
    FlashCardGame, 
    MultipleChoiceGame, 
    SpeedChallengeGame,
    TypingGame,
    MemoryMatchGame,
    Difficulty,
    Word
)
from word_database import WordDatabase, get_sample_words


def example_flash_card():
    """範例1：閃卡遊戲"""
    print("\n" + "="*60)
    print("範例1：閃卡遊戲 - 學習動物單字")
    print("="*60)
    
    db = WordDatabase()
    words = db.get_words_by_category("動物")
    
    game = FlashCardGame(words, Difficulty.EASY)
    game.start_game()
    
    # 進行3輪遊戲
    for i in range(3):
        print(f"\n第 {i+1} 輪")
        game.play_round()
    
    result = game.end_game()
    print(f"\n遊戲結束！")
    print(f"得分: {result.score}")
    print(f"正確率: {result.accuracy:.1f}%")


def example_multiple_choice():
    """範例2：選擇題遊戲"""
    print("\n" + "="*60)
    print("範例2：選擇題遊戲 - 學習顏色")
    print("="*60)
    
    db = WordDatabase()
    words = db.get_words_by_category("顏色")
    
    game = MultipleChoiceGame(words, Difficulty.MEDIUM, num_choices=4)
    game.start_game()
    
    # 進行3輪遊戲
    for i in range(3):
        print(f"\n第 {i+1} 題")
        game.play_round()
    
    result = game.end_game()
    print(f"\n遊戲結束！")
    print(f"答對 {result.correct_answers}/{result.total_questions} 題")
    print(f"總分: {result.score}")


def example_typing():
    """範例3：拼寫練習"""
    print("\n" + "="*60)
    print("範例3：拼寫練習 - 學習問候語")
    print("="*60)
    
    db = WordDatabase()
    words = db.get_words_by_category("問候")
    
    game = TypingGame(words, Difficulty.MEDIUM)
    game.start_game()
    
    # 進行3輪拼寫
    for i in range(3):
        print(f"\n第 {i+1} 個單字")
        game.play_round()
    
    result = game.end_game()
    print(f"\n練習結束！")
    print(f"正確率: {result.accuracy:.1f}%")


def example_custom_words():
    """範例4：使用自訂單字"""
    print("\n" + "="*60)
    print("範例4：自訂單字學習")
    print("="*60)
    
    # 建立自訂單字清單
    custom_words = [
        Word("bonjour", "你好", "問候", "Bonjour! Comment allez-vous?"),
        Word("merci", "謝謝", "問候", "Merci beaucoup!"),
        Word("chat", "貓", "動物", "J'ai un chat blanc."),
        Word("rouge", "紅色", "顏色", "Une pomme rouge."),
        Word("pain", "麵包", "食物", "Je mange du pain."),
    ]
    
    game = FlashCardGame(custom_words, Difficulty.EASY)
    game.start_game()
    
    for i in range(3):
        print(f"\n第 {i+1} 輪")
        game.play_round()
    
    result = game.end_game()
    print(f"\n完成！得分: {result.score}")


def example_search_words():
    """範例5：搜尋單字"""
    print("\n" + "="*60)
    print("範例5：搜尋單字功能")
    print("="*60)
    
    db = WordDatabase()
    
    # 搜尋包含 "chat" 的單字
    results = db.search_words("chat")
    print(f"\n搜尋 'chat' 的結果:")
    for word in results:
        print(f"  {word.french} ({word.category}) - {word.chinese}")
    
    # 搜尋「動物」類別
    results = db.search_words("動物")
    print(f"\n搜尋 '動物' 類別的結果 (共{len(results)}個):")
    for word in results[:5]:  # 只顯示前5個
        print(f"  {word.french} - {word.chinese}")


def example_all_categories():
    """範例6：瀏覽所有類別"""
    print("\n" + "="*60)
    print("範例6：瀏覽單字資料庫")
    print("="*60)
    
    db = WordDatabase()
    
    print(f"\n資料庫統計:")
    print(f"總單字數: {len(db.get_all_words())}")
    print(f"總類別數: {len(db.get_categories())}")
    
    print(f"\n各類別單字數:")
    for category in db.get_categories():
        words = db.get_words_by_category(category)
        print(f"  {category}: {len(words)} 個單字")
        # 顯示該類別的前3個單字
        for word in words[:3]:
            print(f"    - {word.french} ({word.chinese})")


def example_mixed_practice():
    """範例7：混合類別練習"""
    print("\n" + "="*60)
    print("範例7：混合類別練習")
    print("="*60)
    
    db = WordDatabase()
    
    # 從多個類別中選擇單字
    mixed_words = []
    mixed_words.extend(db.get_words_by_category("問候")[:3])
    mixed_words.extend(db.get_words_by_category("動物")[:3])
    mixed_words.extend(db.get_words_by_category("食物")[:3])
    
    print(f"\n已選擇 {len(mixed_words)} 個單字進行練習")
    
    game = MultipleChoiceGame(mixed_words, Difficulty.MEDIUM, num_choices=3)
    game.start_game()
    
    for i in range(3):
        print(f"\n第 {i+1} 題")
        game.play_round()
    
    result = game.end_game()
    print(f"\n混合練習完成！正確率: {result.accuracy:.1f}%")


def show_menu():
    """顯示範例選單"""
    print("\n" + "="*60)
    print("🇫🇷 法文學習遊戲 - 使用範例 🇫🇷")
    print("="*60)
    print("1. 範例1：閃卡遊戲 - 學習動物單字")
    print("2. 範例2：選擇題遊戲 - 學習顏色")
    print("3. 範例3：拼寫練習 - 學習問候語")
    print("4. 範例4：自訂單字學習")
    print("5. 範例5：搜尋單字功能")
    print("6. 範例6：瀏覽單字資料庫")
    print("7. 範例7：混合類別練習")
    print("8. 執行所有範例")
    print("0. 退出")
    print("="*60)


def run_all_examples():
    """執行所有範例"""
    example_flash_card()
    input("\n按 Enter 繼續下一個範例...")
    
    example_multiple_choice()
    input("\n按 Enter 繼續下一個範例...")
    
    example_typing()
    input("\n按 Enter 繼續下一個範例...")
    
    example_custom_words()
    input("\n按 Enter 繼續下一個範例...")
    
    example_search_words()
    input("\n按 Enter 繼續下一個範例...")
    
    example_all_categories()
    input("\n按 Enter 繼續下一個範例...")
    
    example_mixed_practice()
    print("\n所有範例執行完畢！")


def main():
    """主程式"""
    while True:
        show_menu()
        choice = input("\n請選擇範例 (0-8): ").strip()
        
        if choice == '0':
            print("\n再見！Bonne journée! 🇫🇷")
            break
        elif choice == '1':
            example_flash_card()
        elif choice == '2':
            example_multiple_choice()
        elif choice == '3':
            example_typing()
        elif choice == '4':
            example_custom_words()
        elif choice == '5':
            example_search_words()
        elif choice == '6':
            example_all_categories()
        elif choice == '7':
            example_mixed_practice()
        elif choice == '8':
            run_all_examples()
        else:
            print("無效的選擇，請重新輸入")
        
        input("\n按 Enter 返回選單...")


if __name__ == "__main__":
    main()
