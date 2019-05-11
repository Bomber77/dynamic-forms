export interface Container {
  id: number;
}

export interface RowContainer extends Container {
  cols: ColContainer[];
  option: {
    gap: number;
  };
}

// tslint:disable-next-line:no-empty-interface
export interface ColContainer extends Container {
  span: number | object;
}
