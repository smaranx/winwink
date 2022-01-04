import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {
  ngOnInit(): void {
  }
  counter=0;
  title = 'WinWink';
  data: any =
  [
    {
      "parentName": "How does it work?                                                                                                                           ",
      "childProperties":
        [
          { "propertyName": "WinWink.io is the world’s first NFT based competition collective. We’ll be gifting over 50 Ethereum randomly between 25 unique winning coins – and supporting monthly giveaways for the next 12 months. Every secondary sale 5% royalty is acrued, this is given back to the community in a live draw EVERY MONTH, there is no cap to the amount that can be won." },
        ]
    },
    {
      "parentName": "How do i get involved?",
      "childProperties":
        [
          { "propertyName": "Simply mint one of our NFT’s or buy from Opensea. Dates for minting will be provided on Discord and Twitter groups for minting." },

        ]
    },
    {
      "parentName": "What is the Season One roadmap?",
      "childProperties":
        [
          { "propertyName": "Again, we want to put an emphasise on keeping everything as transparent for the community as possible, this is why we have also introduced a start up raffle roadmap not just so everyone can see how it works but to give the best odds to those early adopters. This will be run once every 1k are minted. Please refer to roadmap to see prizes. There will be 5 winners of 1 Ethereum each per 1k mint. Those winning NFT’s will be also put into a champion raffle at the end of minting process." },
         
        ]
    }
    ,
    {
      "parentName": "Where can we see the live draw?",
      "childProperties":
        [
          { "propertyName": "As we cannot confirm the dates for when we sellout per 1k we will give a 48 hour notice on the discord & twitter to confirm the time and date of the live draw. Once we have minted all 5,000 we will begin raffles 20:00 GMT on the 1st of every month.  All live draws will be on the website." },
 
        ]
    }
    ,
    {
      "parentName": "How are prizes paid?",
      "childProperties":
        [
          { "propertyName": "We hope for the community to be as active as possible on the Discord – so if your NFT number is selected then you can reply in the Winners section to confirm and we’ll PM you. You’ll give us a ETH address to which you want your Ethereum transferred to. If no winner comes forward within 7 days we will automatically send the Ethereum to the NFT owners ETH address to which they used to purchase the NFT originally." },
          
        ]
    }
    ,
    {
      "parentName": "Limit to the amount that can be won?",
      "childProperties":
        [
          { "propertyName": "There is no limit to the amount that can be won. There is no limit to the amount of times that you can win either." },

        ]
    }
    ,
    {
      "parentName": "What are the champion NFT´s?",
      "childProperties":
        [
          { "propertyName": "This is exclusive only for the minting process. We are running a exclusive champion group for the initial minting process. Every 1k minted, we have 5 winners. Those 5 winning NFT numbers go into the main prize draw at the end of the 5k mint. So 25 NFT numbers will go into another live draw and one lucky person will walk away with 25 Ethereum. The NFT’s can be sold/transferred at anytime during the selection, so whoever owns the NFT during the draw will be deemed the winner. Not the person. This will reset after the Minting process and we will be starting the monthly draws." },

        ]
    }
    ,
    {
      "parentName": "I sold the winning NFT what now?",
      "childProperties":
        [
          { "propertyName": "Screenshots of winner’s ID and ethereum will be taken at the time of the winner being announced. This way if sold after we will always distribute the winnings to the correct owner." },

        ]
    }
  ]

  toggleAccordian(event: { target: any; }, index: string | number) {
    var element = event.target;
    element.classList.toggle("active");
    if(this.data[index].isActive) {
      this.data[index].isActive = false;
    } else {
      this.data[index].isActive = true;
    }      
    var panel = element.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
}

}
