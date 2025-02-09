export function yesOrNoDescription(data: boolean | undefined, description: string = ''): string {
     return data ? `${description} TAK` : `${description} NIE`;
}
