import { FilterType } from '../const';
import dayjs from 'dayjs';

const isTripDateBeforeToday = (date) => date && dayjs().isBefore(date, 'D');

const filter = {
  [FilterType.FUTURE]: (tripPoints) => tripPoints.filter((tripPoint) => isTripDateBeforeToday(tripPoint.dateFrom)),
  [FilterType.EVERYTHING]: (tripPoints) => tripPoints,
};

const generateFilter = () => Object.keys(filter).map((filterName) => filterName );

export {generateFilter, filter , isTripDateBeforeToday};
