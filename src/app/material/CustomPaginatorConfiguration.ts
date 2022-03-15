// import { MatPaginatorIntl } from '@angular/material';

import { MatPaginatorIntl } from '@angular/material/paginator';

export function CustomPaginator() {
  const customPaginatorIntl = new MatPaginatorIntl();

  customPaginatorIntl.itemsPerPageLabel = 'Registros por pagina:';

  return customPaginatorIntl;
}
