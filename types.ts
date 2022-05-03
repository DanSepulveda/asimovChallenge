export interface ConfigProps {
    host: string | undefined,
    user: string | undefined,
    password: string | undefined,
    database: string | undefined,
    port: string | undefined
}

export interface ResponseProps {
    time_from: number
}