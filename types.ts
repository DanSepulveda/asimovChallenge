export interface ConfigProps {
    host: string | undefined,
    user: string | undefined,
    password: string | undefined,
    database: string | undefined,
    port: number | undefined
}

export interface ResponseProps {
    time_from: number
}