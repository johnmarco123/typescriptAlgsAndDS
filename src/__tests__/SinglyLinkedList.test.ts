import { SinglyLinkedList } from "../SinglyLinkedList";

test("", () => {
    let s = new SinglyLinkedList();
    s.insert("hi");
    s.insert("bye");
    let found = s.search("hi");
    expect(found).toBeTruthy();
    expect(s.get_head()).toBe("bye");
    
})


