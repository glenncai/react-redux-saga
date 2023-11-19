export type ActionType = {
  type: string;
  data: DataType;
};

export type DataType = {
  id: number;
  name: string;
  color: string;
  price: number;
  category: string;
  brand: string;
  photo: string;
};
