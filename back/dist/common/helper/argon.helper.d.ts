export declare class ArgonHelper {
    isHashValid(hash: string, text: string): Promise<boolean>;
    hash(text: string): Promise<string>;
}
