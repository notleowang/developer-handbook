---
prev: false
next: false
outline: deep
---

# Data Structures

Everything about common data structures.

## Classifications

1. **Linear Data Structure**

    A data structure in which data elements are arranged sequentially or linearly, where each element is attached to its prevoius and next adjacent elements.

2. **Static Data Structure**

    A data structure with a fixed memory size. Typically easier to access the elements in a static data structure.

3. **Dynamic Data Structure**

    A data structure with a size that is not fixed. It can be randomly updated during the runtime which may be considered efficient concerning the memory complexity of the code.

4. **Non-Linear Data Structure**

    A data structure where data elements are not placed sequentially or linearly. In non-linear data structures, we cannot traverse all elements in a single run only.

## Data Structures

The following is a list of some of the most popular data structures used today.

### Array

An array is a linear data structure that is a collection of data items stored at contiguous memory locations. The idea is to store multiple items of the same type together.

::: details Visualization
![array](/software-dev/assets/array.png)
Source: geeksforgeeks
:::

::: code-group

```python [Python]
array = ["apple", "orange", "banana"]

x = array[0]
print(x) # outputs "apple"
```

```c++ [C++]
string array[3] = {"apple", "orange", "banana"};

string x = array[0];
cout << x; // outputs "apple"
```

:::

### Linked List

Similar to an array, but elements are not stored at a continguous location. The elements are instead linked using **pointers**.

::: details Visualization
![linked-list](/software-dev/assets/linked-list.png)
Source: geeksforgeeks
:::

### Stack

Another linear data structure which follows a particular order in which the operations are performed. The order is either LIFO (Last In First Out) or FILO (First In Last Out). All insertion and deletion are permitted at only one end of the list.

::: details Visualization
![stack](/software-dev/assets/stack.png)
Source: geeksforgeeks
:::

**Operations**

- `push()`
  
  An element is inserted into the stack.

- `pop()`
  
  An element is removed from the top of the stack and is returned.

- `top()`

  Return the last inserted element that is at the top without removing it.

- `size()`
  
  Return the size of the stack, or the total number of elements present in the stack.

- `isEmpty()`
  
  Indicates whether the stack is empty or not.

### Queue

A linear structure which follows a First In First Out (FIFO) order for the operations. Items are inserted at one end and deleted from the other end. The difference between a Queue and Stack, is how they handle removing elements.

::: details Visualization
![queue](/software-dev/assets/queue.png)
Source: geeksforgeeks
:::

**Operations**

- `Enqueue()`

  Adds (or stores) an element at the end of the queue.

- `Dequeue()`

  Removal of elements from the queue.

- `Peek()` or `front()`

  Returns the element at the front of the queue without removing it.

- `rear()`

  Returns the element at the end of the queue without removing it.

- `isFull()`

  Validates if the queue is full.

- `isNull()`

  Checks if the queue is empty.

### Binary Tree

A **hierarchical** (non-linear) data structure. Each node has **at most** two children, usually referred to as left child and right child.

A **Binary Tree node** should contain the following parts.

1. The data
2. A pointer to it's left child
3. A pointer to it's right child

If the tree is empty, then the value of the root is `NULL`.

::: details Visualization
![binary-tree](/software-dev/assets/binary-tree.png)
Source: geeksforgeeks
:::

### Binary Search Tree

A Binary Search Tree is a type of Binary Tree but has the following constraints.

- The left part of the root node contains keys less than the root node key.
- The right part of the root node contains keys greater than the root node key.
- There is no duplicate key present in the binary tree.

::: details Visualization
![binary-search-tree](/software-dev/assets/bst.png)
Source: geeksforgeeks
:::

### Heap

A special Tree-based data structure in which the tree is a **complete** binary tree. Generally, there are two types of Heaps.

- **Max-Heap**

  The key present at the root node must be **greatest** among the keys present at all of its children. The same property applies recursively for all sub-trees in that Binary Tree.

- **Min-Heap**

  The key present at the root node must be **minimum** among the keys present at all of its children. The same property applies recursively for all sub-trees in that Binary Tree.

::: details Visualization
![heap](/software-dev/assets/heap.png)
Source: geeksforgeeks
:::

### Hashing

A technique designed with a special function called the **hash function**, which is used to map data to a specific index in a hash table that enables faster retrieval of information based on its key.

There are three components to the hashing technique.

1. Hash Function

    Provide the data items into the hash function.

2. Hash Code

    The hash function crunches the data and gives a unique hash code.

3. Hash Table

    The hash code then points to a specific location within the hash table.

::: details Visualization
![hashing](/software-dev/assets/hashing.png)
Source: geeksforgeeks
:::

### Hash Table

Also known as a **Hash Map**. It is a data structure that stores **key-value** pairs. It uses a **hash function** to map keys to a fixed-size array.