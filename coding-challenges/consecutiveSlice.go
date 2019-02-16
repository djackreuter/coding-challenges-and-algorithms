// Task: Consider you have statues of different sizes.
// You want to arrange the statues from smallest to
// largest, so each statue is bigger than the previous
// by exactly 1. You may need additional statues. Write
// a function to figure out the minimum number of additional
// statues needed.

package main

import (
	"fmt"
	"sort"
)

func main() {
	testSlice := []int{3, 1, 10, 8, 2}
	fmt.Println(makeSliceConsecutive(testSlice))
}

func makeSliceConsecutive(statues []int) int {
	sort.Ints(statues)
	missing := make([]int, 0)
	for i := 0; i < len(statues)-1; i++ {
		if (statues[i+1] - statues[i]) != 1 {
			missing = append(missing, statues[i]+1)
			statues = append(statues, statues[i]+1)
			sort.Ints(statues)
		}
	}
	fmt.Println(missing) // [4, 5, 6, 7, 9]
	return len(missing)  // 5
}
