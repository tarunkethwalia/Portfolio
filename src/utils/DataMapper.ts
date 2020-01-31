import {ProjectModel} from '../models/projects';

export function DataMapper(data) {
  // tslint:disable-next-line:prefer-const
  let TableField = [];
  data.forEach(x => {
    const row = {
      _id: x._id,
      Name: x.Name,
      Url: x.Url
    };
    TableField.push(row);
  });
  return TableField;
}
