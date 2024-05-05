const sforce = window.sforce;

const Phone = () => {
  const handleChangePanelWidth = () => {
    sforce.opencti.setSoftphonePanelWidth({ widthPX: 900 });
  };
  return <div onClick={handleChangePanelWidth}>Phone</div>;
};

export default Phone;
