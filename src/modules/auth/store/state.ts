import { injectable } from 'inversify';
import { makeAutoObservable } from 'mobx';

@injectable()
class AuthState {}

export { AuthState };
