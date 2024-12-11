import { TYPES } from "@configs/di-types.config";
import "./App.css";
import { useInjection } from "inversify-react";
import { PersonelService } from "@services/personel";
import { useEffect, useState } from "react";

function App() {
  const personelService = useInjection<PersonelService>(TYPES.PersonelService);

  const [users, setUsers] = useState<unknown>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await personelService.getPersonelUsers();
      setUsers(data);
    };

    fetchData();
  }, [personelService]);

  console.log(users); // This will log the updated state when available

  return null;
}

export default App;
