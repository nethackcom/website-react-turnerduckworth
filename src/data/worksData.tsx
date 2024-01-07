export interface IWorksData {
    id: number,
    title: string,
    img_src: string,
    date: string,
    category: [{title: string, url: string}, {title: string, url: string}],
}

export const WorksData: IWorksData[] = [
    {
        id: 1,
        title: "Website design development",
        img_src: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "April 2023",
        category: [{title: "UI/UX Design", url: "http://localhost:3000"}, {title: "E-Commerce", url: "http://localhost:3000"}],
    },
    {
        id: 2,
        title: "Website design development",
        img_src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "April 2023",
        category: [{title: "UI/UX Design", url: "http://localhost:3000"}, {title: "E-Commerce", url: "http://localhost:3000"}],
    },
    {
        id: 3,
        title: "Website design development",
        img_src: "https://images.unsplash.com/photo-1482053450283-3e0b78b09a70?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "April 2023",
        category: [{title: "UI/UX Design", url: "http://localhost:3000"}, {title: "E-Commerce", url: "http://localhost:3000"}],
    },
    {
        id: 4,
        title: "Website design development",
        img_src: "https://images.unsplash.com/photo-1536329583941-14287ec6fc4e?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        date: "April 2023",
        category: [{title: "UI/UX Design", url: "http://localhost:3000"}, {title: "E-Commerce", url: "http://localhost:3000"}],
    }
]