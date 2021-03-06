/**
 * Copyright (c) INOVUA SOFTWARE TECHNOLOGIES.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default function diff<T>(
  original: { [id: string]: T },
  modified: { [id: string]: T }
) {
  const added = Object.keys(modified).filter(k => !(k in original));
  const deleted = Object.keys(original).filter(k => !(k in modified));
  const updated = Object.keys(modified)
    .filter(k => k in original)
    .filter(k => JSON.stringify(original[k]) !== JSON.stringify(modified[k]));

  return { deleted, updated, added };
}
