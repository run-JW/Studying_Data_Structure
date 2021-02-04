class Stack():
    def __init__(self): # Constructor
        self.items = []
        
    def push(self, item): # Create
        self.items.append(item)
        
    def pop(self): # Delete
        return self.items.pop()

    def is_empty(self): # Check the list it is empty
        return self.items == []

    def peek(self): # if stack isn't empty then print the lastest element.
        if not self.is_empty():
            return self.items[-1]
    
    def get_stack(self): # Print list of elements
        return self.items
