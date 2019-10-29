type Result<T> =
    { success: true, value: T } |
    { success: false };

declare function getResult(): Result<number>;
