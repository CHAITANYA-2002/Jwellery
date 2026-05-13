import { Switch, Route, Router } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { ManiDOroHome } from "@/pages/ManiDOroHome";
import { CollectionPage } from "@/pages/CollectionPage";
import { ContactPage } from "@/pages/ContactPage";
import { BespokePage } from "@/pages/BespokePage";
import { ProductPage } from "@/pages/ProductPage";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={ManiDOroHome} />
      <Route path="/collection" component={CollectionPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/bespoke" component={BespokePage} />
      <Route path="/product/:id" component={ProductPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router base={base}>
          <AppRoutes />
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
