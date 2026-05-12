import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { ManiDOroHome } from "@/pages/ManiDOroHome";
import { CollectionPage } from "@/pages/CollectionPage";
import { ContactPage } from "@/pages/ContactPage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={ManiDOroHome} />
      <Route path="/collection" component={CollectionPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
