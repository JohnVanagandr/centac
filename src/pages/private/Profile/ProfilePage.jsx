import Placeholder from "@/components/ui/Feedback/Placeholder";

const ProfilePage = () => {
  return (
    <div className="animate-fade-in">
      <Placeholder 
        title="Mi Perfil" 
        icon="account_circle" 
        progress={20} 
      />
    </div>
  );
};

export default ProfilePage;