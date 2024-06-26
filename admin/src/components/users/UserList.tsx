import { List, TextInput } from 'react-admin';
import UserDatagrid from './UserDatagrid.js';

const filters = [<TextInput source="q" label="Search" alwaysOn />];

const UserList = () => (
  <List filters={filters}>
    <UserDatagrid />
  </List>
);

export default UserList;
