import { TYPES } from "@configs/di-types.config";
import "../../styles/App.css";
import { Ipersonel } from "@services/personel/interfaces/index.interface";
import { IResponse } from "types";
import { PersonelStore } from "@stores/personel";
import { container } from "@configs/inversify.config";
import { useEffect, useState } from "react";

const App = () => {
  const personelStore = container.get<PersonelStore<Ipersonel>>(
    TYPES.PersonelStore
  );
  const [d, setD] = useState<IResponse<Ipersonel> | null>(null);

  useEffect(() => {
    const fn = async () => {
      const res = await personelStore.fetchPersonelUsers();
      setD(res);
    };
    fn();
  }, [personelStore]);

  return (
    <ul>
      {d?.data.map((e) => (
        <li key={e.id}>{e.name}</li>
      ))}
    </ul>
  );
};

export default App;
