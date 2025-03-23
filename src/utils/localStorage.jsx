const employees = [
    {
      id: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Design Homepage",
          description: "Create a responsive homepage layout",
          date: "2025-03-20",
          category: "Design",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Fix Login Bug",
          description: "Resolve issue with incorrect credentials handling",
          date: "2025-03-18",
          category: "Development",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Write Documentation",
          description: "Document API endpoints and authentication",
          date: "2025-03-25",
          category: "Documentation",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Create UI Components",
          description: "Develop reusable UI components in React",
          date: "2025-03-22",
          category: "Development",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Test Checkout Flow",
          description: "Ensure smooth checkout process in e-commerce app",
          date: "2025-03-19",
          category: "Testing",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      id: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Optimize Images",
          description: "Reduce image size for faster loading",
          date: "2025-03-21",
          category: "Performance",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "SEO Audit",
          description: "Check SEO score and improve meta tags",
          date: "2025-03-23",
          category: "SEO",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      id: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Setup Database",
          description: "Design schema for user authentication",
          date: "2025-03-20",
          category: "Backend",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Write Unit Tests",
          description: "Add unit tests for critical functions",
          date: "2025-03-19",
          category: "Testing",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      id: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Deploy Application",
          description: "Push latest build to production",
          date: "2025-03-21",
          category: "Deployment",
          active: true,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Monitor Logs",
          description: "Check logs for errors after deployment",
          date: "2025-03-22",
          category: "Maintenance",
          active: false,
          newTask: false,
          completed: false,
          failed: false
        },
        {
          title: "Refactor Code",
          description: "Improve code readability and maintainability",
          date: "2025-03-23",
          category: "Development",
          active: false,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    }
  ];
  
  const admin = {
    id: 1,
    email: "admin@example.com",
    password: "123"
  };
  
  export const setLocalStorage = () =>{
      localStorage.setItem('employees',JSON.stringify(employees))
      localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))

    return {employees, admin}
  }
  