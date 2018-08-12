export class AdvanceService {
	values = [
		{
			'math':65,
			'physics':76
		}
	];

	addValue(math:any, physics:any) {
		let obj = {
			'math':math,
			'physics':physics
		}
		this.values.push(obj);
	}
}