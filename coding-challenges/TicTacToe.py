import random


class TickTacToe:
    def __init__(self):
        self.board = [[9, 8, 7], [6, 5, 4], [3, 2, 1]]
        self.options = [item for sublist in self.board for item in sublist]
        self.win_combos = [[9, 8, 7], [6, 5, 4], [3, 2, 1], [
            9, 6, 3], [8, 5, 2], [7, 4, 1], [9, 5, 1], [7, 5, 3]]
        self.user_letter = ""
        self.computer_letter = ""
        self.user_turn = True
        self.winner = False

    def run(self):
        self.print_board()

    def add_to_win_combo(self, num, letter):
        for eachArr in self.win_combos:
            if num in eachArr:
                eachArr.remove(num)
                eachArr.append(letter)
        self.check_winner()

    def check_winner(self):
        for eachArr in self.win_combos:
            if all(item == "X" for item in eachArr):
                self.winner = True
                print("X Wins!!")
            if all(item == "O" for item in eachArr):
                self.winner = True
                print("O Wins!!")
        self.print_board()

    def get_player_move(self):
        if self.user_turn:
            move = int(input("Choose a number on the board\n"))
            if move not in self.options:
                print("That number is already taken")
                return self.get_player_move()
            self.options.remove(move)
            self.move(move)
        else:
            computer_move = random.choice(self.options)
            self.options.remove(computer_move)
            self.move(computer_move)

    def choose_letters(self):
        user_letter = input("Choose your letter, X or O\n").upper()
        if user_letter != "X" and user_letter != "O":
            print("Invalid letter")
            self.choose_letters()
        self.user_letter = user_letter
        if self.user_letter == "X":
            self.computer_letter = "O"
        else:
            self.computer_letter = "X"

    def print_board(self):
        if not self.user_letter:
            self.choose_letters()
        print("----------------")
        for row in self.board:
            print(row)
        if not self.winner:
            self.get_player_move()

    def players_move(self):
        letter = ""
        if self.user_turn:
            letter = self.user_letter
        else:
            letter = self.computer_letter
        self.user_turn = not self.user_turn
        return letter

    def move(self, location):
        for i, val in enumerate(self.board):
            eachArr = self.board[i]
            for j, val2 in enumerate(eachArr):
                if eachArr[j] == location:
                    letter = self.players_move()
                    self.board[i][j] = letter
                    self.add_to_win_combo(location, letter)


game = TickTacToe()
game.run()
