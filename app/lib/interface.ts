export interface Post {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    map(arg0: (post: any) => import("react").JSX.Element): import("react").ReactNode | Iterable<import("react").ReactNode>;
    title: string;
    overview: string;
    content: unknown;
    _id: string;
    slug: {
        current: string;
    };
    _createdAt: string;
}