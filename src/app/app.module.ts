import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { LoginselectComponent } from './loginselect/loginselect.component';
import { FarmerLoginComponent } from './farmer-login/farmer-login.component';
import { BidderLoginComponent } from './bidder-login/bidder-login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ViewMarketComponent } from './view-market/view-market.component';
import { WelcomeFarmerComponent } from './welcome-farmer/welcome-farmer.component';
import { WelcomeBidderComponent } from './welcome-bidder/welcome-bidder.component';
import { SellHistoryComponent } from './sell-history/sell-history.component';
import { SellRequestComponent } from './sell-request/sell-request.component';
import { AgGridModule } from 'ag-grid-angular';
import { ForgetComponent } from './forget/forget.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginBidderComponent } from './login-bidder/login-bidder.component';
import { LoginFarmerComponent } from './login-farmer/login-farmer.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    // LoginselectComponent,
    FarmerLoginComponent,
    BidderLoginComponent,
    NotfoundComponent,
    ViewMarketComponent,
    WelcomeFarmerComponent,
    WelcomeBidderComponent,
    SellHistoryComponent,
    SellRequestComponent,
    ForgetComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    LoginBidderComponent,
    LoginFarmerComponent,
    AdminDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgGridModule.withComponents([])

  ],
  providers: [],
  bootstrap: [AppComponent, FooterComponent]
})
export class AppModule { }
