/**
 * Problem 4: Three ways to sum to n
 */

/**
 * Implementation A: Mathematical Formula
 *
 * Complexity Analysis:
 * - Time Complexity: O(1)
 *   The calculation involves a constant number of arithmetic operations (multiplication, addition, division),
 *   regardless of the size of n.
 * - Space Complexity: O(1)
 *   No additional space is used proportional to n.
 */
export function sum_to_n_a(n: number): number {
    return (n * (n + 1)) / 2;
}

/**
 * Implementation B: Iterative Loop
 *
 * Complexity Analysis:
 * - Time Complexity: O(n)
 *   The loop runs n times, performing constant time operations in each iteration.
 * - Space Complexity: O(1)
 *   Only a single variable (sum) is used to store the result, regardless of n.
 */
export function sum_to_n_b(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

/**
 * Implementation C: Recursion
 *
 * Complexity Analysis:
 * - Time Complexity: O(n)
 *   The function calls itself n times.
 * - Space Complexity: O(n)
 *   Each recursive call adds a frame to the call stack. For large n, this could lead to a stack overflow.
 */
export function sum_to_n_c(n: number): number {
    if (n <= 0) return 0;
    if (n === 1) return 1;
    return n + sum_to_n_c(n - 1);
}

// Verification
// (Run with: npx ts-node src/problem4/index.ts)
const n = 5;
console.log(`n = ${n}`);
console.log(`sum_to_n_a: ${sum_to_n_a(n)}`);
console.log(`sum_to_n_b: ${sum_to_n_b(n)}`);
console.log(`sum_to_n_c: ${sum_to_n_c(n)}`);

