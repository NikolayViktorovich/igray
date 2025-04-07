export function extractNumber(str: string): number {
	const match = str.match(/\d+/)
	return match ? parseInt(match[0], 10) : 0
}
