import random


class RockPaperScissors:
    def __init__(self):
        self.user_score = 0
        self.computer_score = 0
        self.options = ["rock", "paper", "scissors"]

    def get_user_input(self):
        return input("Choose rock, paper, scissors\n").lower()

    def get_computer_pick(self, options):
        return random.choice(options)

    def check_score(self):
        if self.computer_score < 3 and self.user_score < 3:
            self.play()
        else:
            self.display_score()
            return

    def display_score(self):
        print("WINS: User: %s Computer: %s" %
              (self.user_score, self.computer_score))

    def play(self):
        self.display_score()
        computerPick = self.get_computer_pick(self.options)
        userPick = self.get_user_input()

        if (userPick != 'rock' and userPick != 'paper' and
                userPick != 'scissors'):
            print("**** Invalid entry ****")

        if computerPick == userPick:
            print("You both picked %s" % computerPick)

        if computerPick == "rock" and userPick == "paper":
            self.user_score += 1
            print("You picked %s, computer picked %s. You win!" %
                  (userPick, computerPick))
        elif computerPick == "rock" and userPick == "scissors":
            self.computer_score += 1
            print("You picked %s, computer picked %s. Computer wins!" %
                  (userPick, computerPick))

        if computerPick == "paper" and userPick == "rock":
            self.computer_score += 1
            print("You picked %s, computer picked %s. Computer wins!" %
                  (userPick, computerPick))
        elif computerPick == "paper" and userPick == "scissors":
            self.user_score += 1
            print("You picked %s, computer picked %s. You win!" %
                  (userPick, computerPick))

        if computerPick == "scissors" and userPick == "rock":
            self.user_score += 1
            print("You picked %s, computer picked %s. You win!" %
                  (userPick, computerPick))
        elif computerPick == "scissors" and userPick == "paper":
            self.computer_score += 1
            print("You picked %s, computer picked %s. Computer wins!" %
                  (userPick, computerPick))

        self.check_score()


rpc = RockPaperScissors()
rpc.play()
