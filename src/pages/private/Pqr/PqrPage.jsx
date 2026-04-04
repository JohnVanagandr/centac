import { Placeholder } from "@/components/ui/Feedback";

const PqrPage = () => {
  return (
    <div className="animate-fade-in">
      <Placeholder 
        title="Atención PQR" 
        icon="forum" 
        progress={15}
      />
    </div>
  );
};

export default PqrPage;