import { user } from "./firebase";

const isAuthenticated = () => !!user;

export default isAuthenticated;
