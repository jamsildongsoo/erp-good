//libs/shared/src/types/auth.type.ts
export type LoginRequest = {
    companyId: string;
    userId: string;
    password: string;
};

export type LoginInfo = {
    companyId: string;
    companyName: string;
    siteId: string;
    siteName: string;
    deptId: string;
    deptName: string;
    userId: string;
    userName: string;
    position: string;
    title: string;
};