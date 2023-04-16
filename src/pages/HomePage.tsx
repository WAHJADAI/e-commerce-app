import { onGetProduct } from "api/products/productAPI";
import { Products } from "api/products/products.type";

import clientApi from "config/axiosConfig";
import { onHandleErrorFromApi } from "helpers";
import React, { ChangeEvent, useEffect, useMemo, useRef, useState } from "react";
import { SyntheticEvent } from "react-toastify/dist/utils";
import useCategoryStore from "store/category/category.store";
import useProductsStore from "store/products/product.store";
import styled from "styled-components";
import { shallow } from "zustand/shallow";

const HomePagText = styled.div`
  display: flex;
  flex-wrap: wrap;

  font-size: 3vw;
  @media screen and (max-width: 500px) {
    font-size: 5vw;
  }
`;
const Line = styled.div`
  width: 10vh;
  height: 2px;
  background-color: black;
  margin: 10px;
  :nth-of-type(1) {
    position: relative;
    left: -50px;
  }
  :nth-of-type(even) {
    position: relative;
    left: 100px;
  }
`;
const WrapText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  width: 250px;
  height: 250px;
`;
const ItemName = styled.span`
  font-size: 28px;
  white-space: nowrap;
  width: 200px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const ItemTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ItemBottom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const PhotoItem = styled.div`
  width: 150px;
  height: 150px;
`;

const ItemProductWrap = styled.div`
  display: inline-flex;
  padding: 10px;
`;
const WrapContent = styled.div`
  display: flex;
  padding: 20px;
  justify-content: center;
  @media screen and (max-width: 700px) {
    flex-direction: column;
  }
`;
const WrapFilter = styled.div`
  @media screen and (max-width: 700px) {
    display: flexbox;
    justify-content: center;
  }
  gap: 5px;
`;

const InputCategoryFilter = styled.input`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const SpanCategoryFilter = styled.span`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;
const IconCategoryInput = styled.span`
  display: none;
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    width: 32px;
    height: 32px;
    clip-path: circle(15px);
    background-color: brown;

    :hover {
      background-color: #60a5fa;
    }
  }
`;
const CategoryFilterContent = styled.div`
  display: block;
  @media screen and (max-width: 700px) {
    display: flex;
  }
`;
const CarouselSlider = styled.section`
  margin: 1rem;
  position: relative;
  overflow: hidden;
`;
const SlidesContainer = styled.ul`
  max-height: 45vh;
  width: 100%;
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  overflow: scroll;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
const Slide = styled.li`
  width: 100%;
  height: 100%;
  flex: 1 0 100%;
`;
const SlideArrowLeft = styled.button`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 4rem;
  background-color: white;
  border: none;
  width: 2rem;
  font-size: 3rem;
  padding: 0;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 100ms;
  left: 0;
  padding-left: 0.25rem;
  border-radius: 0 2rem 2rem 0;
  :hover,
  :focus {
    opacity: 1;
  }
`;
const SlideArrowRight = styled.button`
  position: absolute;
  display: flex;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 4rem;
  background-color: white;
  border: none;
  width: 2rem;
  font-size: 3rem;
  padding: 0;
  cursor: pointer;
  opacity: 0.5;
  transition: opacity 100ms;
  right: 0;
  padding-left: 0.75rem;
  border-radius: 2rem 0 0 2rem;
  :hover,
  :focus {
    opacity: 1;
  }
`;
function HomePage() {
  const CarouselRef = React.useRef<HTMLUListElement>(null);
  const texts = ["when", "shopping", "makes you", "happy"];
  const [searchTextShow, setSearchTextShow] = useState<string>("");
  const { productsStore, onGetProductStore } = useProductsStore(
    (state) => ({ productsStore: state.productsStore, onGetProductStore: state.onGetProductStore }),
    shallow,
  );
  const { categoryStore, onUpdateCategory } = useCategoryStore(
    (state) => ({ categoryStore: state.category, onUpdateCategory: state.onUpdateCategory }),
    shallow,
  );
  const [searchText, setSearchText] = useState<string>("");

  const [searchByCategory, setSearchByCategory] = useState<number[]>([]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTextShow(e.target.value);
    setSearchText(e.target.value);
  };

  const handleCheckedCategory = (e: ChangeEvent<HTMLInputElement>) => {
    const categoryId = parseInt(e.target.id);
    if (e.target.checked) {
      setSearchByCategory((categorySelect) => categorySelect.concat(categoryId));
    } else {
      setSearchByCategory((categoryUnselect) => categoryUnselect.filter((id) => id !== categoryId));
    }
  };
  const filteredProduct = useMemo(
    () =>
      productsStore?.data
        ? productsStore?.data.filter(
            (product) =>
              product.name?.toLowerCase().includes(searchText.toLowerCase().trim()) &&
              (searchByCategory.length === 0 ||
                (product.category?.id && searchByCategory.includes(product.category.id))),
          )
        : [],
    [searchText, searchByCategory, productsStore],
  );
  useEffect(() => {
    if (!productsStore) {
      onGetProductStore();
    }

    if (!categoryStore) {
      onUpdateCategory();
    }
  }, [productsStore, categoryStore]);

  if (!productsStore) {
    return null;
  }
  const iconCategory = [
    null,
    <i className='fa-brands fa-bluetooth-b'></i>,
    <i className='fa-regular fa-clock'></i>,
    <i className='fa-solid fa-headphones'></i>,
    <i className='fa-solid fa-wifi'></i>,
  ];
  const currentItems = productsStore?.data && filteredProduct;

  const prev = () => {
    requestAnimationFrame(() => {
      const itemWidth = CarouselRef.current?.clientWidth;
      if (itemWidth) {
        CarouselRef.current.scrollLeft -= itemWidth;
      }
    });
  };
  const next = () => {
    requestAnimationFrame(() => {
      const itemWidth = CarouselRef.current?.clientWidth;
      if (itemWidth) {
        CarouselRef.current.scrollLeft += itemWidth;
      }
    });
  };
  return (
    <div>
      <CarouselSlider>
        <SlideArrowLeft onClick={prev}>&#8249;</SlideArrowLeft>

        <SlideArrowRight onClick={next}>&#8250;</SlideArrowRight>

        <SlidesContainer ref={CarouselRef}>
          <Slide>
            <WrapText>
              <HomePagText>
                when<br></br>shopping<br></br> makes you<br></br>happy.
              </HomePagText>
            </WrapText>
          </Slide>
          <Slide>
            <WrapText>
              <HomePagText>
                Shopping <br></br>is<br></br> my <br></br>cardio.
              </HomePagText>
            </WrapText>
          </Slide>
          <Slide>
            <WrapText>
              <HomePagText>
                Whoever said <br></br>that money can’t buy happiness <br></br>simply didn’t know
                <br></br> where to go shopping.
              </HomePagText>
            </WrapText>
          </Slide>
          <Slide>
            <WrapText>
              <HomePagText>
                Online shopping <br></br>makes everything <br></br>so much <br></br>easier.
              </HomePagText>
            </WrapText>
          </Slide>
        </SlidesContainer>
      </CarouselSlider>
      <WrapText>
        {/* <Line></Line>
        {texts.map((text, index) => (
          <HomePagText key={index}>{text}</HomePagText>
        ))}

        <Line></Line> */}
      </WrapText>

      <WrapContent>
        <WrapFilter>
          <div>
            <input
              type='search'
              value={searchTextShow}
              onChange={handleSearchInput}
              className='input'
              placeholder='Filter'
            />
          </div>

          <CategoryFilterContent>
            {categoryStore &&
              categoryStore.data?.map((category) => (
                <div key={category.id}>
                  <label>
                    <InputCategoryFilter
                      type='checkbox'
                      name={category.title}
                      id={category.id?.toString()}
                      onChange={handleCheckedCategory}
                    />
                    <SpanCategoryFilter>{category.title}</SpanCategoryFilter>
                    <IconCategoryInput>{iconCategory[category.id ?? 0]}</IconCategoryInput>
                  </label>
                </div>
              ))}
          </CategoryFilterContent>
        </WrapFilter>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ display: "flex", justifyContent: "flex-start", flexWrap: "wrap" }}>
            {currentItems && currentItems.length > 0 ? (
              currentItems.map((product) => (
                <ItemProductWrap key={product.id}>
                  <Item>
                    <ItemTop>
                      <span>{product.isNew ? "New" : "Previously owned"}</span>
                      <span>{product.stock}</span>
                    </ItemTop>
                    <ItemBottom>
                      <ItemName>{product.name}</ItemName>
                      <PhotoItem>
                        <img src={product.img?.url} width='150px' height='150px' />
                      </PhotoItem>
                    </ItemBottom>

                    <span>$ {product.price}</span>
                  </Item>
                </ItemProductWrap>
              ))
            ) : (
              <h1>No results found!</h1>
            )}
          </div>
        </div>
      </WrapContent>
    </div>
  );
}

export default HomePage;
