import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store.ts';

type DispatchFunc = () => AppDispatch;

export const useAppDispatch: DispatchFunc = useDispatch;
