/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import DEFAULT_CHECK_COLUMN from './defaultCheckColumn';
import { IColumn, TypeColumnGroup } from '../types/TypeColumn';

export default function(
  columns: any[],
  props: {
    checkboxColumn: IColumn | boolean;
    groups: TypeColumnGroup[] | undefined;
  }
): any[] {
  const checkboxColumn = props.checkboxColumn;

  if (checkboxColumn) {
    const checkCol = {
      ...DEFAULT_CHECK_COLUMN,
      ...(checkboxColumn === true ? null : checkboxColumn),
      name: null,
      id: DEFAULT_CHECK_COLUMN.id,
    };

    if (checkCol.visible === false) {
      checkCol.visible = true;
    }

    if (columns[0] && columns[0].group && props.groups && props.groups.length) {
      // show border for next column if there are stacked columns
      delete checkCol.nextBorderLeft;
    }
    columns = [checkCol].concat(columns);
  }

  return columns;
}
