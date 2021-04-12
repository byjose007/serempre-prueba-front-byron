import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  productPrice: number = 0;
  configOptions: any = [];

  private _priceSubj: BehaviorSubject<number> = new BehaviorSubject(0);

  $price = this._priceSubj.asObservable();
  products: any = [];

  constructor(private firestore: AngularFirestore) {
    // this.products = [
    //   {
    //     title: 'MOMENTUM True Wireless 2',
    //     subtitle: 'Earbuds that put sound first',
    //     price: 295.95,
    //     currency: '$',
    //     badge: 'New Release',
    //     images: [
    //       {
    //         img:
    //           'https://firebasestorage.googleapis.com/v0/b/serempre-test-c443b.appspot.com/o/product_detail_x1_mobile_MOMENTUM_True_Wireless_2_Case_black_Sennheiser-4.png?alt=media&token=1774c8d6-08a2-4826-bbcd-d73cc88b0d70',
    //         thumbnail:
    //           'https://firebasestorage.googleapis.com/v0/b/serempre-test-c443b.appspot.com/o/product_detail_x1_mobile_MOMENTUM_True_Wireless_2_Case_black_Sennheiser-1.png?alt=media&token=81428f69-4afb-4c5f-b52d-62c0d4865989',
    //       },
    //       {
    //         img:
    //           'https://firebasestorage.googleapis.com/v0/b/serempre-test-c443b.appspot.com/o/big-MOMENTUM-TRUEWIRELESS2%403x.png?alt=media&token=fac67f30-93c4-4f79-b5e2-65af95115a8b',
    //         thumbnail:
    //           'https://firebasestorage.googleapis.com/v0/b/serempre-test-c443b.appspot.com/o/big-MOMENTUM-TRUEWIRELESS2.png?alt=media&token=89ce2656-c6ac-4d00-85b6-6e414179140b',
    //       },
    //       {
    //         img:
    //           'https://firebasestorage.googleapis.com/v0/b/serempre-test-c443b.appspot.com/o/Screen%20Shot%202020-08-11%20at%2010.15-3.png?alt=media&token=c02fdec9-cf93-4d7c-8681-0dea262eeecc',
    //         thumbnail:
    //           'https://firebasestorage.googleapis.com/v0/b/serempre-test-c443b.appspot.com/o/Screen%20Shot%202020-08-11%20at%2010.15-1.png?alt=media&token=dbb11e2c-daac-4e01-bd3d-0145c001c848',
    //       },
    //     ],
    //     featuresImages: [
    //       {
    //         title: 'Customizable Touch Controls',
    //         urlImage:
    //           'https://firebasestorage.googleapis.com/v0/b/serempre-test-c443b.appspot.com/o/Path%403x-3.png?alt=media&token=1537a533-2c18-4a36-b85e-8c51ab5799cf',
    //       },
    //       {
    //         title: 'Built-in Equalizer',
    //         urlImage:
    //           'https://firebasestorage.googleapis.com/v0/b/serempre-test-c443b.appspot.com/o/Shape%403x.png?alt=media&token=347aa16b-7229-4c56-bc08-1d1bc9ea5cfe',
    //       },
    //       {
    //         title: 'Active Noise Cancellation',
    //         urlImage:
    //           'https://firebasestorage.googleapis.com/v0/b/serempre-test-c443b.appspot.com/o/Combined%20Shape%403x.png?alt=media&token=887f9914-d6d4-4f58-aec6-b7c6141045bf',
    //       },
    //     ],
    //     tabsInformations: [
    //       {
    //         title: 'overview',
    //         description:
    //           ' For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.',
    //       },
    //       {
    //         title: 'features',
    //         description:
    //           "is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    //       },
    //       {
    //         title: "What's in the box?",
    //         description:
    //           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    //       },
    //     ],
    //     options: [
    //       {
    //         label: 'Choose your finish.',
    //         layout: 'horizontal',
    //         options: [
    //           {
    //             title: 'Ivory White',
    //             desc:
    //               'For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True. ',
    //             selected: true,
    //           },
    //           {
    //             title: 'Matte Black',
    //             desc:
    //               'Of all of the celestial bodies that capture our attention and fascination as astronomers.',
    //             selected: false,
    //           },
    //         ],
    //       },
    //       {
    //         label: 'Would you like to add extended warranty coverage?.',
    //         layout: 'vertical',
    //         options: [
    //           {
    //             title: '2 years coverage',
    //             desc: 'For the past 75 years, Sennheiser has put sound first.',
    //             selected: true,
    //           },
    //           {
    //             title: '3 years coverage',
    //             desc: 'For the past 75 years, Sennheiser has put sound first.',
    //             selected: false,
    //             addedCost: 75,
    //           },
    //         ],
    //       },
    //       {
    //         label: 'Features.',
    //         layout: 'vertical',
    //         options: [
    //           {
    //             title: 'Voice Assistant support',
    //             selected: true,
    //           },
    //           {
    //             title: 'Customizable controls',
    //             selected: false,
    //             addedCost: 25,
    //           },
    //         ],
    //       },
    //     ],
    //     specifications: [
    //       {
    //         title: 'dimensions',
    //         description: '76.8 x 43. x 34.7 mm (earbuds and charging case)',
    //       },
    //       {
    //         title: 'USB Standard',
    //         description: 'USB-C',
    //       },
    //       {
    //         title: 'Power supply',
    //         description: 'Sennheiser 7mm dynamic driver',
    //       },
    //       {
    //         title: 'Frequency response (Microphone)',
    //         description: '100 Hz to 10 kHz',
    //       },
    //       {
    //         title: 'Frequency response (Microphone)',
    //         description: '5 - 21,000 Hz',
    //       },
    //       {
    //         title: 'Noise cancellation',
    //         description: 'Single-Mic ANC per earbud side',
    //       },
    //     ],
    //   },
    // ];
  }

  setProducts(products: any) {
    this.products = products;
  }

  getProducts() {
    return this.firestore.collection('products').get();
  
  }

  selectOption(option: any, category: number) {
    console.log(this.products);

    for (let opt in this.products.options[category]['options']) {
      this.products.options[category]['options'][opt].selected = false;
    }

    this.products.options[category]['options'][option]['selected'] = true;
  }

  setPrice(initialPrice: any) {
    this.productPrice = initialPrice;
    this._priceSubj.next(initialPrice);
  }

  calculateFinalPrice() {
    let addedCost = 0;
    for (let category in this.products.options) {
      for (let option of this.products.options[category]['options']) {
        console.log(option, 'option');
        if (option.addedCost && option.selected) {
          addedCost += option.addedCost;
        }
      }
    }

    this._priceSubj.next(this.productPrice + addedCost);
  }

  saveData() {
    this.firestore
      .collection('products')
      .add(this.products[0])
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
