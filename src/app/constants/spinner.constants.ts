import { DataSource } from 'projects/test-ngx-ob/core/models';

export const SPINNER_NAVIGATION = [
  {
    title: 'Api',
    route: '/components/spinner/api',
  },
  {
    title: 'Ejemplos',
    route: '/components/spinner/examples',
  },
];

export const SPINNER_DATA_SOURCE: DataSource[] = [
  {
    name: { data: '@Input() <br/> type: SpinnerTypes', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el color del spinner. Por defecto es primary.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> size: Sizes', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el tamaño del spinner. Por defecto es mediano.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> isExpandable: boolean', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer si el spinner es expandible. Por defecto es false.',
      customClasses: '',
    },
  },
  {
    name: { data: '@Input() <br/> description: string', customClasses: '' },
    description: {
      data: 'Se utiliza para establecer el texto que acompañe al spinner.',
      customClasses: '',
    },
  },
];

export const SPINNER_COLORS = `
  type SpinnerTypes = 'primary' | 'secondary' | 'tertiary' | 'success' | 'danger' | 'light' | 'dark';
`;

export const SPINNER_EXAMPLE_COLORS = `
<o-spinner></o-spinner>
<o-spinner type="secondary"></o-spinner>
<o-spinner type="tertiary"></o-spinner>
<o-spinner type="success"></o-spinner>
<o-spinner type="danger"></o-spinner>
<o-spinner type="light"></o-spinner>
<o-spinner type="dark"></o-spinner>
`;

export const SPINNER_EXAMPLE_SIZES = `
<o-spinner size="sm"></o-spinner>
<o-spinner></o-spinner>
<o-spinner size="lg"></o-spinner>
`;

export const SPINNER_EXAMPLE_BLOCK = `
<div style="width: 96px">
  <o-spinner [isExpandable]="true"></o-spinner>
</div>
`;

export const SPINNER_EXAMPLE_MESSAGE = `
<o-spinner size="lg" description="Cargando..."></o-spinner>
`;
