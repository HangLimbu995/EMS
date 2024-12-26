const employees = [
    {
        id: 1,
        firstname: "Prabin",
        email: "employee1@example.com",
        password: "123",
        taskNumber: {
            active: 2,
            completed: 1,
            failed: 0,
            new: 2,
        },
        tasks: [
            {
                action: "Submit report",
                completed: true,
                failed: false,
                newTask: false,
                title: "Monthly Sales Report",
                description: "Prepare and submit the monthly sales report to the manager.",
                category: "Reports",
                date: "2024-01-10",
            },
            {
                action: "Update database",
                completed: false,
                failed: false,
                newTask: true,
                title: "Database Cleanup",
                description: "Remove outdated entries from the sales database.",
                category: "Maintenance",
                date: "2024-01-15",
            },
            {
                action: "Team meeting",
                completed: false,
                failed: false,
                newTask: true,
                title: "Weekly Team Meeting",
                description: "Discuss team progress and upcoming tasks.",
                category: "Meetings",
                date: "2024-01-20",
            },
        ],
    },
    {
        id: 2,
        firstname: "Sushma",
        email: "employee2@example.com",
        password: "123",
        taskNumber: {
            active: 2,
            completed: 1,
            failed: 1,
            new: 1,
        },
        tasks: [
            {
                action: "Client follow-up",
                completed: true,
                failed: false,
                newTask: false,
                title: "Follow-Up with Client A",
                description: "Ensure Client A received the project update and confirm their feedback.",
                category: "Client Relations",
                date: "2024-01-08",
            },
            {
                action: "Prepare proposal",
                completed: false,
                failed: true,
                newTask: false,
                title: "Project Proposal",
                description: "Draft the initial proposal for the new project.",
                category: "Documentation",
                date: "2024-01-12",
            },
            {
                action: "System update",
                completed: false,
                failed: false,
                newTask: true,
                title: "Update CRM System",
                description: "Install the latest updates for the CRM software.",
                category: "IT",
                date: "2024-01-18",
            },
        ],
    },
    {
        id: 3,
        firstname: "Rajesh",
        email: "employee3@example.com",
        password: "123",
        taskNumber: {
            active: 2,
            completed: 1,
            failed: 0,
            new: 2,
        },
        tasks: [
            {
                action: "Training session",
                completed: true,
                failed: false,
                newTask: false,
                title: "Product Training",
                description: "Attend the training session on the new product line.",
                category: "Training",
                date: "2024-01-05",
            },
            {
                action: "Create presentation",
                completed: false,
                failed: false,
                newTask: true,
                title: "Presentation for Clients",
                description: "Prepare a PowerPoint presentation for the upcoming client meeting.",
                category: "Presentation",
                date: "2024-01-14",
            },
            {
                action: "Organize files",
                completed: false,
                failed: false,
                newTask: true,
                title: "Document Organization",
                description: "Reorganize files and folders on the shared drive.",
                category: "Admin",
                date: "2024-01-19",
            },
        ],
    },
    {
        id: 4,
        firstname: "Anjali",
        email: "employee4@example.com",
        password: "123",
        taskNumber: {
            active: 1,
            completed: 1,
            failed: 0,
            new: 1,
        },
        tasks: [
            {
                action: "Respond to emails",
                completed: true,
                failed: false,
                newTask: false,
                title: "Email Correspondence",
                description: "Respond to pending emails from clients and colleagues.",
                category: "Communication",
                date: "2024-01-07",
            },
            {
                action: "Inventory check",
                completed: false,
                failed: false,
                newTask: true,
                title: "Office Inventory",
                description: "Conduct a check of office inventory and supplies.",
                category: "Maintenance",
                date: "2024-01-16",
            },
        ],
    },
    {
        id: 5,
        firstname: "Kishor",
        email: "employee5@example.com",
        password: "123",
        taskNumber: {
            active: 1,
            completed: 1,
            failed: 0,
            new: 1,
        },
        tasks: [
            {
                action: "Organize event",
                completed: false,
                failed: false,
                newTask: true,
                title: "Annual Company Party",
                description: "Plan and organize the company party.",
                category: "Events",
                date: "2024-01-25",
            },
            {
                action: "Update website",
                completed: true,
                failed: false,
                newTask: false,
                title: "Website Updates",
                description: "Add the new product line to the website.",
                category: "Marketing",
                date: "2024-01-09",
            },
        ],
    },
];

const admin = [
    {
        id: 1,
        firstname: "Ramesh",
        email: "admin@example.com",
        password: "123",
    },
];

export const setLocalStorage = () => {
    localStorage.setItem("employees", JSON.stringify(employees));
    localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    const admin = JSON.parse(localStorage.getItem("admin"));

    return { employees, admin };
};
