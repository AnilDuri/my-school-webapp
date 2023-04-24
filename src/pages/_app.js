import React from "react";

import Navbar from "./../components/Navbar";
import { AuthProvider } from "./../util/auth";
import { QueryClientProvider } from "./../util/db";
import { Route, Router, Switch } from "./../util/router";
import NotFoundPage from "./404";
import AboutPage from "./about";
import AuthPage from "./auth";
import DashboardPage from "./dashboard";
import FirebaseActionPage from "./firebase-action";
import IndexPage from "./index";
import LegalPage from "./legal";
import PricingPage from "./pricing";
import SettingsPage from "./settings";

import "./../styles/global.css";
import "./../util/analytics";

function App(props) {
  return (
    <QueryClientProvider>
      <AuthProvider>
        <Router>
          <div className="flex flex-col h-screen max-h-screen">
            <div className="h-1/12">
              <Navbar />
            </div>

            <div className="grow flex-col h-11/12">
              <Switch>
                <Route exact path="/" component={IndexPage} />

                <Route exact path="/about" component={AboutPage} />

                <Route exact path="/pricing" component={PricingPage} />

                <Route exact path="/auth/:type" component={AuthPage} />

                <Route exact path="/dashboard" component={DashboardPage} />

                <Route exact path="/settings/:section" component={SettingsPage} />

                <Route exact path="/legal/:section" component={LegalPage} />

                <Route
                  exact
                  path="/firebase-action"
                  component={FirebaseActionPage}
                />

                <Route component={NotFoundPage} />
              </Switch>
            </div>
          </div>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
