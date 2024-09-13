export interface Post {
    title: string;
    overview: string;
    content: unknown;
    _id: string;
    slug: {
        current: string;
    };
    _createdAt: string;
}