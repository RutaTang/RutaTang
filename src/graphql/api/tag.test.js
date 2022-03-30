import { API } from "aws-amplify";

import { queryAllTags } from "./post";

jest.mock("aws-amplify");

const mockGraphQl = (data) => {
  API.graphql.mockResolvedValue(data);
};

describe("query all tags", () => {
  describe("No Content", () => {
    it("should return empty array (For empty data)", async () => {
      mockGraphQl({});
      await expect(queryAllTags()).resolves.toEqual([]);
    });

    it("should return empty array (For empty specific data)", async () => {
      mockGraphQl({
        data: {
          listTags: {},
        },
      });
      await expect(queryAllTags()).resolves.toEqual([]);
    });

    it("should return empty array (For empty specific data items)", async () => {
      mockGraphQl({
        data: {
          listTags: {
            items: [],
          },
        },
      });
      await expect(queryAllTags()).resolves.toEqual([]);
    });

    it("should return empty array (For **null** specific data items)", async () => {
      mockGraphQl({
        data: {
          listTags: {
            items: null,
          },
        },
      });
      await expect(queryAllTags()).resolves.toEqual([]);
    });

    it("should return empty array (For empty specific data items with other fileds)", async () => {
      mockGraphQl({
        data: {
          listTags: {
            items: [],
          },
          nextToken: null,
          startedAt: null,
        },
      });
      await expect(queryAllTags()).resolves.toEqual([]);
    });
  });

  describe("should return corresponding length of items", () => {
    it("should return 0 item (for null items)", async () => {
      mockGraphQl({
        data: {
          listTags: {
            items: null,
          },
        },
      });
      await expect(queryAllTags()).resolves.toHaveLength(0);
    });

    it("should return 0 item (for empty items)", async () => {
      mockGraphQl({
        data: {
          listTags: {
            items: [],
          },
        },
      });
      await expect(queryAllTags()).resolves.toHaveLength(0);
    });

    it("should return corresponding item (for items consist of non-null items)", async () => {
      mockGraphQl({
        data: {
          listTags: {
            items: [
              {
                name: "tag1",
              },
              {
                name: "tag2",
              },
              {
                name: "tag3",
              },
            ],
          },
        },
      });
      await expect(queryAllTags()).resolves.toHaveLength(3);
    });

    it("should return corresponding item (for items consist of null items)", async () => {
      mockGraphQl({
        data: {
          listTags: {
            items: [
              {
                name: "tag1",
              },
              {
                name: "tag2",
              },
              null,
            ],
          },
        },
      });
      await expect(queryAllTags()).resolves.toHaveLength(2);
    });
  });
});
