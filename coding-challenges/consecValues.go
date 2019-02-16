// Task:  Write a function to find the highest
// product of two adjacent ints in a slice

package main

import (
	"fmt"
)

func main() {
	test := []int{1, 3, 4, 5, 7, 7}
	fmt.Println(highestInt(test))
}

func highestInt(s []int) int {
	highest := s[0] * s[1]
	for i := 0; i < len(s)-1; i++ {
		if highest < s[i]*s[i+1] {
			highest = s[i] * s[i+1]
		}
	}
	return highest // 49
}
