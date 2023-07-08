import { Stack } from "./Stack";
export function bubble_sort_stack(a: Stack, b: Stack): Stack {
    let no_swaps:boolean = true;

    // Stop if we iterate through stack a and no swaps happen
    while (true) {
        while (!a.is_empty()) {
            let top_a = a.pop();

            if (b.is_empty()) {
                b.push(top_a);
                continue;
            }


            let top_b = b.pop();
            // Swap condition
            if (top_b > top_a) {
                no_swaps = false;
                b.push(top_a); b.push(top_b);
            } else {
                b.push(top_b); b.push(top_a);
            }

        }

        // Reload a
        while (!b.is_empty()) a.push(b.pop());
        if (no_swaps) break;

        no_swaps = true;
    }
    return a;
}
