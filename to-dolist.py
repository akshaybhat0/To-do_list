tasks = []

def show_menu():
    print("\n--- To-Do List Menu ---")
    print("1. View To-Do List")
    print("2. Add a Task")
    print("3. Remove a Task")
    print("4. Mark Task as Completed")
    print("5. Exit")

def view_tasks():
    if not tasks:
        print("Your To-Do List is empty.")
    else:
        print("\nYour To-Do List:")
        for index, task in enumerate(tasks, start=1):
            status = "✓" if task['completed'] else "✗"
            print(f"{index}. {task['title']} [Status: {status}]")

def add_task():
    task_title = input("Enter the task: ")
    tasks.append({"title": task_title, "completed": False})
    print(f"Task '{task_title}' added successfully!")

def remove_task():
    view_tasks()
    task_number = int(input("Enter the task number to remove: "))
    if 0 < task_number <= len(tasks):
        removed_task = tasks.pop(task_number - 1)
        print(f"Task '{removed_task['title']}' removed successfully!")
    else:
        print("Invalid task number.")

def mark_task_completed():
    view_tasks()
    task_number = int(input("Enter the task number to mark as completed: "))
    if 0 < task_number <= len(tasks):
        tasks[task_number - 1]['completed'] = True
        print(f"Task '{tasks[task_number - 1]['title']}' marked as completed!")
    else:
        print("Invalid task number.")

def main():
    while True:
        show_menu()
        choice = input("Choose an option (1-5): ")
        
        if choice == "1":
            view_tasks()
        elif choice == "2":
            add_task()
        elif choice == "3":
            remove_task()
        elif choice == "4":
            mark_task_completed()
        elif choice == "5":
            print("Exiting the program. Goodbye!")
            break
        else:
            print("Invalid option, please try again.")

if __name__ == "__main__":
    main()
