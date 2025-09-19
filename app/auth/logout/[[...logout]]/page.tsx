import SignOutButton from "../../sign-out-buttons";

export default function Logout() {
  return (
    <div className="flex flex-1 items-center justify-center rounded-lg shadow-sm">
      <div className="flex flex-col items-center gap-1 text-center">
        <h2 className="text-3xl font-bold tracking-tight">Log out</h2>
        <p className="text-base text-muted-foreground">
          Are you sure you wanna logout?
        </p>
        <SignOutButton />
      </div>
    </div>
  );
}
