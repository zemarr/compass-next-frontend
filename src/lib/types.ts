type ImageFormat = {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
};

type FeaturedImage = {
    data: {
        id: number;
        attributes: ImageFormat;
    };
};

type User = {
    data: {
        id: number;
        attributes: {
            firstname: string;
            lastname: string | null;
            username: string | null;
            preferedLanguage: string | null;
            createdAt: string;
            updatedAt: string;
        };
    };
};

type ArticleAttributes = {
    title: string;
    date: string;
    description: string;
    slug: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    featuredImage: FeaturedImage;
    createdBy: User;
    updatedBy: User;
};

type Article = {
    id: number;
    attributes: ArticleAttributes;
};

type Pagination = {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
};

type Meta = {
    pagination: Pagination;
};

type ApiResponse = {
    data: Article[];
    meta: Meta;
};

export type {
    ImageFormat,
    FeaturedImage,
    User,
    ArticleAttributes,
    Article,
    Pagination,
    Meta,
    ApiResponse
}