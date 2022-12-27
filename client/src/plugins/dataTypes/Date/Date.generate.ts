import { format, fromUnixTime } from 'date-fns';
import { DTWorkerGenerationData, DTGenerateResult } from '~types/dataTypes';
import { WorkerUtils } from '~utils/workerUtils';

export const generate = (data: DTWorkerGenerationData, utils: WorkerUtils): DTGenerateResult => {
	const { fromDate, toDate, format: displayFormat } = data.rowState;
	if (!displayFormat) {
		return { display: '' };
	}
	const date = utils.randomUtils.getRandomNum(fromDate, toDate);
	return { display: format(fromUnixTime(date), displayFormat) };
};